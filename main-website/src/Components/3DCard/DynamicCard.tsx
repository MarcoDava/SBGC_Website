import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { safeHref } from "../../lib/utils";

interface Props {
    name: string;
    description: string;
    image: string;
    eventPage: string;
};

const DynamicCard = (props : Props) => {
    return(
        <>
            <CardContainer className="inter-var">
                <CardBody className="bg-[#5b4747]/40 rounded-2xl border border-[#4a3636]/30 backdrop-blur-sm relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-300"
                    >
                    {props.name}
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-200 text-sm max-w-sm mt-2"
                    >
                    {props.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={props.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                        decoding="async"
                        loading="lazy"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={safeHref(props.eventPage)}
                        target={props.eventPage.startsWith("http") ? "_blank" : undefined}
                        rel={props.eventPage.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="px-4 py-2 rounded-xl text-xs font-normal text-neutral-400"
                    >
                        Learn More 
                    </CardItem>
                    </div>
                </CardBody>
                </CardContainer>

        </>
    )
}


export default DynamicCard;