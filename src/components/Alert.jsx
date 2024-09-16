export const Alert = (props)=>{
  const {todoNum} = props;
  console.log(todoNum);
  if(todoNum > 5){
    return (
      <p style={{color:"red"}}>登録できるタスクは５つまでです。</p>
    )
  }
}