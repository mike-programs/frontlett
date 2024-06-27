interface props {
    title: string
}


export default function SecondaryButton(props: props) {
    return (
        <div>
            <button className='bg-white text-heading px-6 py-3 w-full border-heading border-[.05rem] rounded-full capitalize' onClick={() => console.log('clicked')}>{props.title}</button>
        </div>
    )
}
