import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeWatch } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(closeWatch());
  }, []);

  return (
    <div>
      <div className="px-5">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="You Tube Video Title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};
