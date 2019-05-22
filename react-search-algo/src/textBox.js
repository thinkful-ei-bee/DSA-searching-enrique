import React from 'react'

 function TextBox(){
    return(
        <div>
        <form>
          <label>
            Data:
            <textarea type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}
export default TextBox