import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";
import { useState } from "react";
import { commentsUrl } from "../../lib/api-url";

export const CommentForm = ({ addComment }) => {
  // Commentaire - Exercise
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get("username")
    const comment = formData.get("comment")
    console.log({username, comment});

    if( username.length < 4 || username.length > 10) {
      setError(" Username doit être compris entre 4 et 10 caractères")
      return
    }

    if( comment.length < 1 || comment.length > 20) {
      setError(" Le commentaire doit être compris entre 1 et 20 caractères")
      return
    }

    addComment({comment, username}).then(() => {
      e.target.reset()
    }).catch((error) => setError(error))
  }

    

  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:px-8">
      <TextField
        label="Commentaire"
        id="username"
        type="text"
        name = "username"
        placeholder="Username"
      />

      <TextField
        label="Username"
        id="comment"
        type="text"
        placeholder="Username"
        component="textarea"
        name = "comment"
      /> 
      {error ? <p style={{ color : "#eb4d4b" }}>{error}</p> : null}
      <Button type="submit">Submit</Button>
    </form>
  );
};
