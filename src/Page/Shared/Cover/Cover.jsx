import { Parallax} from 'react-parallax';
const Cover = ({img,title}) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={(`${img}`)}
            bgImageAlt="the menu"
            strength={200}
        >
            <div
                className={title==='our menu'||title==='order food'?'hero h-[700px]':'hero h-[500px]'}
              
            >
                <div className=""></div>
                <div className="hero-content  text-neutral-content text-center">
                    <div className="w-[700px] hero-overlay py-10 px-10 " >
                        <h1 className={title==='our menu'? 'mb-5 text-5xl uppercase font-bold':'mb-5 text-3xl uppercase font-bold'}>{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
           
        </Parallax>

    )
}
export default Cover