import { Button } from "@mui/material";

const ButtonsGroup = () => {
  return (
    <div className="mt-5">
      <Button sx={{marginRight: "4px", fontWeight: "bold", textTransform: "none", borderRadius: "20px", transition: "all .4s", color: "purple","&:hover" : {
        backgroundColor: "purple", color:"#fff",
      }}}>Active</Button>
      <Button sx={{marginRight: "4px",fontWeight: "bold", textTransform: "none", borderRadius: "20px", transition: "all .4s", color: "purple","&:hover" : {
        backgroundColor: "purple", color:"#fff", 
      }}}>Completed</Button>
      <Button sx={{marginLeft: "4px",fontWeight: "bold", textTransform: "none", borderRadius: "20px", transition: "all .4s", color: "purple","&:hover" : {
        backgroundColor: "purple", color:"#fff", 
      }}}>Add todos</Button>
    </div>
  )
}

export default ButtonsGroup;