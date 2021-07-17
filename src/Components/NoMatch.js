const NoMatch = () => {
    return ( 
        <div>
        <h1>This is not a valid page!</h1>
        <p>You will be redirected to another page in 3 seconds.</p>
        <meta http-equiv='refresh' content='3; URL=/home' />
        </div>
        );
}
 
export default NoMatch;