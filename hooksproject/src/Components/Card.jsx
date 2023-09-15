/* eslint-disable react/prop-types */

const Card = (props) => {
    return (
        <div className="max-[600px]:w-[570px] max-[600px]:relative relative h-[400px] w-[300px] rounded-md mb-3 mr-3 ml-3">
            <img
                src={props.image}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{props.name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="mt-2 p-2 bg-black inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile →
                </button>
            </div>
        </div>

    )
}

export default Card