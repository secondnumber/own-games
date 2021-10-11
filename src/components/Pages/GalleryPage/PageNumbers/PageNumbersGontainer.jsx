import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../../../redux/reducers/galleryReducer';
import PageNumbers from "../../../common/PageNumbers/PageNumbers";

class PageNumbersContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage(1);
  }
  setCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  }
  render() {
    return <PageNumbers
        currentPage={this.props.gallery.currentPage}
        totalImagesCount={this.props.gallery.totalImagesCount}
        pageSize={this.props.gallery.pageSize}
        setCurrentPage={this.props.setCurrentPage}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    gallery: state.gallery,
  };
};
export default connect(mapStateToProps, { setCurrentPage })(
    PageNumbersContainer
);

