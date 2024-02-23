

const Chart = ({arr, current}) => {
    return (  
        <div className="flex flex-row items-end gap-2">
            {arr.map((val, index) => (
            <div
                key={index}
                style={{ height: `${val}px` }}
                className={`w-[8px] duration-200 ${
                index === current.c1 || index === current.c2
                    ? "bg-red-800"
                    : "bg-zinc-300"
                }`}
            ></div>
            ))}
        </div>
    );
}
 
export default Chart;