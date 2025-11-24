import { DataTables } from "@/components/common/DataTables"
import { SectionCards } from "@/components/common/SectionCards"

const dataCard = [
    {
        "id": 1,
        "CardDescription": "Total Revenue",
        "Amount": 1500,
        "Trending": "12.5%",
        "CardFooterUno": "Menos de hace un mes",
        "CardFooterDos": "Menos de hace un mes creooo",
    },
    {
        "id": 2,
        "CardDescription": "Total Revenue",
        "Amount": 1500,
        "Trending": "12.5%",
        "CardFooterUno": "Menos de hace un mes",
        "CardFooterDos": "Menos de hace un mes creooo",
    },
    {
        "id": 3,
        "CardDescription": "Total Revenue",
        "Amount": 1500,
        "Trending": "12.5%",
        "CardFooterUno": "Menos de hace un mes",
        "CardFooterDos": "Menos de hace un mes creooo",
    },
    {
        "id": 4,
        "CardDescription": "Total Revenue",
        "Amount": 1500,
        "Trending": "12.5%",
        "CardFooterUno": "Menos de hace un mes",
        "CardFooterDos": "Menos de hace un mes creooo",
    },
]

function Dashboard() {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <SectionCards card={dataCard} />
                    {/*<DataTables />*/}
                </div>
            </div>
        </div>
    )
}

export default Dashboard