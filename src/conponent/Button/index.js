// import myAlert from "../../myAlert" // Import khi chưa cấu hình babel
import myAlert from "~/myAlert" 

function Button() {
    return <button onClick={myAlert}>Click me...</button>
}

export default Button