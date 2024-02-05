
import { commentsUrl } from '../../lib/api-url';
import { Loader } from '../atom/Loader/Loader';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';
import {  useFetch } from '../../hooks/useFetch.js'

export const CommentSection = () => {
  // Commentaires - Exercise
 const { data : comments , isResolved, isLoading, isRejected, isIdle, error, run} = useFetch(commentsUrl)

 const addComment = async (comment) => {
  const res = await fetch(commentsUrl, {
     method: "POST",
     body: JSON.stringify(comment)
   });
   const json = await res.json();
   if (res.ok) {
     run();
     return json;
   } else {
     return Promise.reject(json.error);
   }

}
 

  return (
    <SectionWrapper title="On est à l'époque de FaceBook ?">
      <div className="flex flex-col items-center w-full max-w-2xl gap-8 m-auto ">
        <div className="grid justify-center w-full gap-4 grid-cols-auto-fill-200-300">
          { isResolved || isIdle ? comments.map((comment) => (
            <Comment {...comment}  key={comment.id}
            />
          )) : null }
          {isLoading ? <p>...Loading</p> : null }
          {isRejected ? <p>{String(error)}</p> : null }
        </div>
        <CommentForm addComment={addComment} />
      </div>
    </SectionWrapper>
  );
};
