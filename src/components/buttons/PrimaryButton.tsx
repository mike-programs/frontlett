interface props {
    title: string,
    bg: string,
    text: string
}


// darkCard
export default function PrimaryButton(props: props) {
    return (
        <div>
            <button className={`bg-${props.bg} text-${props.text} px-6 py-3 rounded-full capitalize`} onClick={() => console.log('clicked')}>{props.title}</button>
        </div>
    )
}
