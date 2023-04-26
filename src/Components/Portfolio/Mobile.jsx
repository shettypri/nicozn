export const Mobile = (props) => {
    console.log(props.workImage);
  return (
    <>
        {
            props.workImage.app.map((val,index) =>{
                return(
                    <div key={index}>
                        <img src={val} />
                    </div>
                )
            })
        }
    </>
    
  )
}
