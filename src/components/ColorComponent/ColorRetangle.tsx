interface ColorRetangleProps {
    color?: string | undefined;
}

export const ColorRetangle = ({color}: ColorRetangleProps) => {
    return (
        <div className="h-full w-[20%]" style={{backgroundColor: color}}>
            <div className="h-full flex justify-center items-end">
                <span className="text-white font-montserrat text-3xl">{color}</span>
            </div>
        </div>
    )
}