import style from "../styles/story.module.scss";
import Image from "next/image";
import Date from "./date";

//Component for each individual story displayed on Home page.
//Props: dark mode boolean; story json with all the data for an individual story from the API.
export default function Story(
    {
        story, dark
    } : {
        story : {
            "by": string,
            "id": number,
            "time":number,
            "title":string,
            "score":number,
            "url":string,
            "karma":number
        },
        dark: boolean
    }
    ) {
        return(
            <div className={`${style["column-container"]}  ${style["story-container"]}`}>
                <div className={`${style["row-container"]}  ${style["main-story-container"]}`}>
                    <div className={`${style["row-container"]}`}>
                        <Image 
                            src="/images/story-img.png"
                            width={100}
                            height={100}
                        />
                        <div className={`${style["column-container"]} ${style["title-date-head"]}`}>
                            <a href={story.url} target="_blank" rel="noreferrer">
                                <h4>{story.title}</h4>
                            </a>
                            <Date timestamp={story.time}></Date>
                        </div>
                    </div>
                    {(dark)?(
                        <div className={`${style["column-container"]} ${style["score"]}`}>
                            <Image
                                src="/images/upvote-dm.svg"
                                width={23}
                                height={23}
                            />
                            <p>
                                {story.score}
                            </p>
                            <Image
                                src="/images/downvote-dm.svg"
                                width={23}
                                height={23}
                            />
                        </div>

                    ):(
                        <div className={`${style["column-container"]} ${style["score"]}`}>
                        <Image
                            src="/images/upvote.svg"
                            width={23}
                            height={23}
                        />
                        <p>
                            {story.score}
                        </p>
                        <Image
                            src="/images/downvote.svg"
                            width={23}
                            height={23}
                        />
                    </div> 
                    )
                }
                </div>
                <div className={style["user-section"]}>
                    <p>by </p>
                    <Image
                        src="/images/cropped-hacker_icon.png"
                        width={30}
                        height={30}
                    />
                    <p>{story.by} ({story.karma} karma)</p>
                </div>
        </div>
    )
}