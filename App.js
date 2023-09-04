/**
 * 
 * <div id="root">
 *      <div id="parent">
 *          <div>
 *              <h1>Hello React
 *          </div>
 *          <div id="child">
 *              <h1>Hello from child</h1>
 *              <p>Hello from child para</p>
 *          </div>
 *      </div>
 * </div>
 */

const parents = React.createElement('div',{id: 'parent'},
    [
        React.createElement('div',{},React.createElement('h1',{},'Hello React')),
        React.createElement('div',{id: 'child'},
            [
                React.createElement('h1',{},'Hello from child'),
                React.createElement('h1',{},'Hello from child para')
            ]
        ),
        
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parents);