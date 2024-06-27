interface Props {
    header?: string;
    body: string;
    img?: string; // Optional, can be undefined
}

export default function Card({ header, body, img }: Props) {
    return (
        <div className="bg-white rounded-lg flex flex-col gap-2 p-6 text-xs lg:gap-6 lg:p-8 h-full">
            {

                /* If the image source is true then text align left else center */
                img ? (
                    <img src={img} alt="card img" className="w-5" />
                ) : (
                    <h2 className="text-heading text-base capitalize">{header}</h2>
                )
            }

            {/* If the image source is true then text align left else center */}
            <p className={`font-light ${img && `text-left`}`}>{body}</p>
        </div>
    );
}
