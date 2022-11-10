import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)} //for each item of the array, return an option.
                     {/* {props.items.map(item => { //its absolutely the same, but with the return keyword explicited.
                          return <option key={item}>{item}</option>
                      })} */}
            </select>
        </div>
    );
}

export default DropDown