import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({info, pageNumber, setpageNumber}) => {
  return  <ReactPaginate 
  className='pagination justify-content-center gap-4 my-4'
  nextLabel='Next'
  previousLabel='Prev'
  nextclassName='btn btn-ñight'
  previousclassName='btn btn-light'
  pageclassName='page-item'
  pageLinkclassName='page-link'
  activeclassName='active'


  onPageChange={(data) => {
  setpageNumber (data.selected + 1)

  }}
  pageCount={info?.pages}/>
}


export default Pagination;