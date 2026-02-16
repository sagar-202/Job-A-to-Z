import { useEffect, useRef } from "react";

const JobsApp = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        // Optional: Add logic to sync route if needed, 
        // but for now just showing the app is enough.
    }, []);

    return (
        <div style={{ width: "100%", height: "calc(100vh - 60px)", overflow: "hidden" }}>
            <iframe
                ref={iframeRef}
                src="/jobs/app/index.html"
                title="Job Hunter"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
            />
        </div>
    );
};

export default JobsApp;
