"use client";

import styles from "./Legals.module.scss";
import Logo from "@/assets/img/logo.svg";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "../ui/button/Button";
import { createClient } from "@/lib/supabase/browser";

function DeleteConfirmation() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function verifyToken() {
      if (!token) {
        setLoading(false);
        return;
      }

      const supabase = createClient();

      const { data, error } = await supabase.functions.invoke(
        "verify-account-deletion",
        {
          body: {
            token,
          },
        },
      );

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setValid(data?.valid === true);
      setLoading(false);
    }

    verifyToken();
  }, [token]);

  async function handleDelete() {
    if (!token) {
      return;
    }

    setDeleting(true);
    setError("");

    const supabase = createClient();

    const { error } = await supabase.functions.invoke("delete-account", {
      body: {
        token,
      },
    });

    if (error) {
      console.error(error);
      setError("Une erreur est survenue. Votre compte n'a pas été supprimé.");
      setDeleting(false);
      return;
    }

    setDeleting(false);
    setDeleted(true);
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <Logo className={styles.heroLogo} />
        <p>Vérification du lien...</p>
      </div>
    );
  }

  if (!valid) {
    return (
      <div className={styles.container}>
        <Logo className={styles.heroLogo} />
        <p>Ce lien est invalide ou a expiré.</p>
      </div>
    );
  }

  if (deleted) {
    return (
      <div className={styles.container}>
        <Logo className={styles.heroLogo} />

        <h1 className="text-center">Compte supprimé</h1>

        <div className={styles.deleteContainer}>
          <p className="text-primary text-policies text-center">
            Votre compte Modjiz et les données qui lui sont associées ont été
            définitivement supprimés.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.heroLogo} />
      <h1 className="text-center">Supprimer votre compte ?</h1>

      <div className={styles.deleteContainer}>
        <p className="text-primary text-policies text-center">
          Cette action supprimera définitivement votre compte Modjiz ainsi que
          les données qui lui sont associées.
        </p>

        <p className="text-primary text-policies text-center">
          Cette action est irréversible.
        </p>

        <Button onClick={handleDelete} disabled={deleting}>
          {deleting
            ? "Suppression en cours..."
            : "Supprimer définitivement mon compte"}
        </Button>
        {error && (
          <div className={`text-caption ${styles.errorContainer}`}>{error}</div>
        )}
      </div>
    </div>
  );
}

export default DeleteConfirmation;
