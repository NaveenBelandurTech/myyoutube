import { FaUserCircle } from "react-icons/fa";

const CommentData = [
  {
    name: "Naveen S Belandur",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so",
    replies: [
      {
        name: "Naveen S Belandur",
        text: "On the other hand, we denounce with righteous indignation and dislike men",
        replies: [],
      },
    ],
  },
  {
    name: "Naveen S Belandur",
    text: "Another top level comment",
    replies: [],
  },
    {
    name: "Naveen S Belandur",
    text: "Another top level comment",
    replies: [],
  },
    {
    name: "Naveen S Belandur",
    text: "Another top level comment",
     replies: [
      {
        name: "Naveen S Belandur",
        text: "On the other hand, we denounce with righteous indignation and dislike men",
        replies: [],
      },
    ]
  },
    {
    name: "Naveen S Belandur",
    text: "Another top level comment",
    replies: [
      {
        name: "Naveen S Belandur",
        text: "On the other hand, we denounce with righteous indignation and dislike men",
        replies: [],
      },
    ]
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="my-2">
      <div className="flex shadow-sm bg-gray-100 p-2 rounded">
        <FaUserCircle size={30} />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>

      {/* 🔁 Recursive rendering */}
      {replies && replies.length > 0 && (
        <div className="ml-8 border-l-2 border-gray-300 pl-4">
          <CommentList comments={replies} />
          
        </div>
      )}
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <Comment key={index} data={comment} />
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentsContainer;
