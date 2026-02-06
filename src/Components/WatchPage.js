import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeWatch } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(closeWatch());
  }, []);

  return (
    <div className='w-full'>
      <div className="px-5">
        <div className='flex'>
                 <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="You Tube Video Title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
           <div className='w-100'>
          <LiveChat/>
        </div>
 

        </div>
     
      </div>
      <CommentsContainer />
    </div>
  );
};
