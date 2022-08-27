import { Level, levels } from "../../helpers/imc";
import upImage from '../../assets/images/up.png'
import downImage from '../../assets/images/down.png'

type Props = {
    item: Level;

};

export const GridItem = ({ item }: Props) => {
    return (
        <div className="flex items-center justify-center flex-1 text-white rounded-xl flex-col p-5" style={{ backgroundColor: item.color }}>
            <div className="flex items-center justify-center w-16 h-16 border border-white rounded-full ">
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
            </div>
            <div className="font-bold mt-1 text-lg">{item.title}</div>

            {item.yourImc &&
                <div className="text-lg mt-2.5 mb-12" >Seu IMC é {item.yourImc} kg/m²</div>
            }

            <div className="text-xs mt-4">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}