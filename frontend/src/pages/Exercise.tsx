import "../App.css";

function Exercise() {
    const exerciseName = {
        pullDay: {
            latFocusedCableRow: "Lat-Focused Cable Row",
            pausedBarbellRDL: "Paused Barbell RDL",
            chestSupportedTBarRow: "Chest-Supported T-Bar Row + Kelso Shrug",
            wideGripLatPulldown: "Wide-Grip Lat Pulldown",
            dumbbellPreacherCurl: "Dumbbell Preacher Curl",
            reversePecDeck: "Reverse Pec Deck",
        },
    };

    // Public URL (or CloudFront) to your S3 bucket; s3:// won't load in browsers
    const base = "https://gym-app-exercise-images.s3.amazonaws.com/";
    const imageKeys = [
        "Pull/ChestSupportedTBar.png",
        "Pull/DBPreacherCurl.png",
    ];

    return (
        <>
            <h2>{exerciseName.pullDay.chestSupportedTBarRow}</h2>
            <div className="exerciseCard">
                {imageKeys.map((key) => (
                    <img
                        key={key}
                        src={`${base}${key}`}
                        alt={key}
                        loading="lazy"
                        width={400}
                        height={300}
                    />
                ))}
            </div>
        </>
    );
}

export default Exercise;
