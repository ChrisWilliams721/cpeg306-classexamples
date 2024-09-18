export default function StudentComponent({sName,sAge,sCity,sProvince}){
    return(
        <div>
            <h3>{sName}</h3>
            <p>Age:{sAge} </p>
            <p>{sCity}, {sProvince}</p>
        </div>
    );
}