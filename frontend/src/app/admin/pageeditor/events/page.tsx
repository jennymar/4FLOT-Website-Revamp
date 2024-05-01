"use client";
// Admin Page Editor landing page
import React, { useState } from "react";

import styles from "./page.module.css";

import Button from "@/components/Button";
import CancelButton from "@/components/CancelButton";
import Collapsable from "@/components/Collapsable";
import PageToggle from "@/components/PageToggle";

// import PageEditorCard from "@/components/PageEditorCard";

export default function Dashboard() {
  const [isEdited, setIsEdited] = useState(false);

  const handleEdit = () => {
    setIsEdited(true);
  };

  const handleSave = () => {
    // Implement save logic
    console.log("Save changes");
  };

  const handleCancel = () => {
    // Implement cancel logic
    console.log("Cancel changes");
  };

  return (
    <main className={styles.page}>
      <PageToggle
        pages={["Get Involved", "Upcoming Events"]}
        links={["./involved", "./events"]}
        currPage={1}
      />
      <div className={styles.sectionContainer}>
        <Collapsable
          title="Page Header"
          subsection={["Subtitle", "Header Image"]}
          textbox={[
            "Lorem ipsum dolor sit amet consectetur. Et vestibulum enim nunc ultrices. Donec blandit sollicitudin vitae integer mauris sed. Mattis duis id viverra suscipit morbi.",
            "",
          ]}
          onChange={handleEdit}
        />
        <Collapsable
          title="Section 1"
          subsection={["Section Title", "Section Subtitle"]}
          textbox={[
            "Volunteer With Us",
            "Lorem ipsum dolor sit amet consectetur. Et vestibulum enim nunc ultrices. Donec blandit sollicitudin vitae integer mauris sed. Mattis duis id viverra suscipit morbi.",
          ]}
          onChange={handleEdit}
        />
        <div className={styles.buttonContainer}>
          <CancelButton text="Cancel" color={isEdited ? "active" : "unactive"} />
          <Button text="Save" color={isEdited ? "active" : "unactive"} />
        </div>
      </div>
    </main>
  );
}
