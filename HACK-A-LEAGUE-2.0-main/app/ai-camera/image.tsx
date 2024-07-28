export default function Image()
{
    return (
        <div className="relative z-50 w-1/2 h-full">
            <img
                src="/pattern.png"
                alt="pattern"
                className="absolute z-10 object-cover w-full h-full opacity-20"
            />

            <img
                src="/cyber-lock.png"
                alt="cyber"
                className="absolute z-20 object-cover w-[85%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[85%]"
            />

            <img
                src="/stars.svg"
                alt="stars"
                className="absolute opacity-90 left-[10%] top-[10%] z-40 object-contain"
            />

            <img
                src="/stars.svg"
                alt="stars"
                className="absolute opacity-70 left-[25%] bottom-[10%] z-40 object-contain"
            />

            <img
                src="/stars.svg"
                alt="stars"
                className="absolute opacity-80 right-0 -rotate-[20deg] top-[5%] z-40 object-contain"
            />

            <div className="absolute w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-[220px] top-1/2 left-1/2 h-[65%]" style={{
                background: "radial-gradient(circle, #00ffff33 50%, #0ea4e922 100%)",
                boxShadow: "12px 8px 100px 40px #00ffff3d"
            }} />
        </div>
    );
};