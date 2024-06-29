

export default function Card(props: { number?: number, title: string, body: string, backgroundColor?: string, imgsrc?: string }) {
    return (
        <div className="bg-white p-4 lg:flex flex-col h-full gap-4 rounded-xl lg:p-6 lg:max-w-[26rem]">

            {
                props.imgsrc ? <div className="bg-darkCard p-3 rounded-full h-fit w-max self-start"><img src={props.imgsrc} alt="image" className="w-8" /></div> : <div className={`bg-${props.backgroundColor} text-white flex max-w-max justify-center items-center p-3 px-5 rounded-[100%]`}> <span>{props.number}</span> </div>
            }

            <h2 className="capitalize text-heading text-base font-medium">{props.title}</h2>
            <p className="text-text">{props.body}</p>
        </div >
    )
}
