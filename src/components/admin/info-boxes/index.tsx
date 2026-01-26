import InfoBox, { InfoBoxProps } from "./info-box";

export default function InfoBoxesAdmin({ data }: { data: InfoBoxProps[] }) {
    return (
        <div className="w-full flex items-center justify-between gap-10">
            {data.map((box, i) => (
                <InfoBox
                    key={i}
                    data={box.data}
                    desc={box.desc}
                    isShow={box.isShow}
                    showButtonEye={box.showButtonEye}
                />
            ))}
        </div>
    )
}