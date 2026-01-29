function Welcome(props){
    console.log(props.lang)
    return(
        <div>
            <h1>Welcome to  {props.lang}</h1>
            <p>I "laaaav" programming (●'◡'●)</p>
        </div>
    );

}

export default Welcome;