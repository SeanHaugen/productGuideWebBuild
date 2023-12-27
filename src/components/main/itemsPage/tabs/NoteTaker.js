import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";

import { Item } from "../../../../helper/Item";

const NoteTaker = ({ username, currentPage }) => {
  const [note, setNote] = useState("");
  const [userNotes, setUserNotes] = useState([]);

  console.log(username);

  useEffect(() => {
    // Fetch user notes when the component mounts or when username changes
    const fetchUserNotes = async () => {
      try {
        if (!username) {
          console.error("Username is undefined");
          return;
        }

        const response = await axios.get(
          `https://dull-pink-termite-slip.cyclic.app/notes/${username}`
        );
        setUserNotes(response.data.notes || []);
      } catch (error) {
        console.error("Error fetching user notes:", error);
      }
    };

    fetchUserNotes();
  }, [username]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = async () => {
    try {
      if (!username) {
        console.error("Username is undefined");
        return;
      }

      // Save the note to the user's database profile
      await axios.post(
        `https://dull-pink-termite-slip.cyclic.app/notes/${username}`,
        { note }
      );

      // Update the userNotes state with the new note
      setUserNotes((prevUserNotes) => [...prevUserNotes, note]);

      // Clear the note input
      setNote("");
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <Item>
      <h2>*currently notes appear for all Items* </h2>
      <p>Will be updating so notes will be discrete for each item</p>
      <ul>
        {userNotes.map((userNote, index) => (
          <li key={index}>{userNote}</li>
        ))}
      </ul>
      <Textarea
        rows="4"
        cols="50"
        placeholder="Write your note here..."
        value={note}
        onChange={handleNoteChange}
      />

      <Button variant="contained" color="success" onClick={handleSaveNote}>
        Save Note
      </Button>
    </Item>
  );
};

export default NoteTaker;
