const Redirect = ({ time, to }) => {
    const lu = `${time}; URL=${to}`;
    return ( 
        <meta http-equiv='refresh' content='; URL=/home' />
     );
}
 
export default Redirect;