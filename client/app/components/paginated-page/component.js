import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import Pagination from 'react-router-pagination-io/client/app/components/common/pagination'
import {useDispatch, useSelector} from "react-redux";
import {requestPage} from "../../actions/paginated-page";

const PaginatedPage = ({ pageNumber }) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const users  = useSelector(state => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFirstRender) {
      dispatch(requestPage(pageNumber))
      setIsFirstRender(false)
    }
  }, [isFirstRender, pageNumber])

  return (
    <section>
      <h1>Pagination (Page {pageNumber})</h1>
      <Pagination />
      <nav>
        <p>Return to the <Link to='/'>index page</Link>.</p>
        {do {
          if (pageNumber) {
            <p>Redux has state for page {pageNumber}.</p>
          }
        }}
      </nav>
      <ul>
        {
          (users.length > 0)
            ? users.map(user => <li><bold>{user.id}.</bold> {user.first_name} {user.last_name}</li>)
            : <p>There are no users on this page!</p>
        }
      </ul>
    </section>
  )
}

PaginatedPage.propTypes = {
  pageNumber: PropTypes.number.isRequired
}

export default PaginatedPage
