import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);
        console.log(props.expense)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100) : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendaFocused: false,
            error: ''
        };
    }


    onDescriptionChage = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };
    onTextChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };
    onAmountChage = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendaFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide descp and amount!'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };
    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit && this.state.error}>
                    <input
                        type="note"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChage}
                        autoFocus
                        />
                    <input 
                        type="text"
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChage}
                        />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)" 
                        value={this.state.note}
                        onChange={this.onTextChange} >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

