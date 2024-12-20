import { useState } from "react";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]); // Comments ki list
  const [comment, setComment] = useState<string>(""); // Input field ka value

  const handleAddComment = () => {
    if (comment.trim() === "") return; // Agar comment khali hai to kuch na karein
    setComments([...comments, comment]); // Nai comment ko array me add karna
    setComment(""); // Input field clear karna
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Comment Section</h1>
      <div className="mb-4">
        <textarea
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
      >
        Add Comment
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <ul className="space-y-3">
          {comments.map((cmt, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded-md shadow-sm border"
            >
              {cmt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
