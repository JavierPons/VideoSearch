import React, {Component} from 'react';
import { connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

 class BookList extends Component {
    renderList () {
        return this.props.books.map((book)=> {
            return (
                <li 
                key={book.title}
                onClick={()=>this.props.selectBook(book)}
                className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4" >
            {this.renderList()}
            </ul>
        )
         
    }
}

function mapStateTopProps(state) {
    // cualquier cosa sera return y ensenyada
    // dentnro de BookList

    return {
        books: state.books
    };
}

//cualquier cosa devuelta/return por esta funcion acabara accesiblre como un props
// en el BookList container.

function mapDispatchProps(dispatch) {

    // cualquiera libro sea seleccionado , el resultado sera pasado 
    //a todos los reducers
    return bindActionCreators({selectBook: selectBook},dispatch)
}

//Promociona BookList desde un componente a un container- necesita saber
//sobre este nuevo dispatch metodo, selectBook. Lo hace accesible como un props
 

export default connect(mapStateTopProps, mapDispatchProps)(BookList);