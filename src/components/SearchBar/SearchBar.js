import React from 'react';
import './SearchBar.css';




class SeachBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions={
            bestMatch: 'best_match',
            highestRated: 'rating',
            mostReviewed: 'review_count',
        };
        this.getSortByClass=this.getSortByClass.bind(this);
        //this.handleSortByChange=this.handleSortByChange.bind(this);
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
    }

    //returns the current CSS class for a sorting option:
    getSortByClass(sortByOption){
        return this.state.sortBy===sortByOption?"active":"";
    }

    //sets the state of a sorting option:
    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(event){
        this.setState({term: event.target.value})
    }

    handleLocationChange(event){
        this.setState({location: event.target.value})
    }


    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map((sortByOption)=>{
            let sortByOptionValue=this.sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                      {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onClick={this.handleTermChange} placeholder="Search Businesses" />
                    <input onClick={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
 
};

export default SeachBar;