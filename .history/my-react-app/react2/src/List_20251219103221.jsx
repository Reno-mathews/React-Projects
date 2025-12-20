
function List(){

        const fruits = [{name:"apple", calories: 95},
                        {name: "orange", calories: 
                        {name: "banana", calories:
                        {name:"coconut", calories: 
                             "pineapple"];
        
        fruits.sort();

        const listItems = fruits.map(fruit => <li>{fruit}</li>);


        return(<ol>{listItems}</ol>);
}
export default List