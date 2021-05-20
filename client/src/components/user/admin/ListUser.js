import React, { useEffect, useContext } from 'react'
import { Table } from 'reactstrap'

import { UserContext } from './../../../contexts/admin/UserContext'
import { AuthContext } from './../../../contexts/client/AuthContext'
import * as USER_TYPE from './../../../reducers/admin/userType.js'
import * as AUTH_TYPE from './../../../reducers/client/authType'
import './ListUser.css'

export default function ListUser( ) {
  let { users, dispatch } = useContext(UserContext)
  let { authState, dispatch: dispatchAuth } = useContext(AuthContext)

  let userCurrent = null

  useEffect(() => { 

    dispatchAuth({
      type: AUTH_TYPE.SET_AUTH,
      payload: null,
    })
  }, [users])

  useEffect(() => {
    if (authState && authState.user && authState.user._doc) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      userCurrent = { ...authState.user._doc }
    }
  }, [users, authState])

  const onUpdatePermission = (e) => {
    if (e.target.dataset.id === userCurrent._id) {
      alert('Can not update permissions for your own account')
      return
    }

    dispatch({
      type: USER_TYPE.EDIT_PERMISSION_BY_ID,
      payload: {
        _id: e.target.dataset.id,
      },
    })
  }

  const onRemoveUser = (e) => {
    if (e.target.dataset.id === userCurrent._id) {
      alert('Can not delete your own account')
      return
    } 

    dispatch({
      type: USER_TYPE.DELETE_BY_ID,
      payload: {
        _id: e.target.dataset.id,
      },
    })
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Hình ảnh</th>
            <th>Tài khoản</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Loại thành viên</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            authState &&
            users.map((item, i) => (
              <tr key={i}>
                <th scope='row'>{i + 1}</th>
                <td>{item.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/images/user/${item.image}`}
                    alt={item.name}
                    width='100'
                    height='100'
                  />
                </td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td
                  className='text-primary tag-update-category'
                  onClick={(e) => onUpdatePermission(e)}
                  data-id={item._id}
                >
                  {item.categoryUser.displayName}
                </td>
                <td>
                  <button
                    className='btn btn-danger ml-2'
                    data-id={item._id}
                    onClick={(e) => onRemoveUser(e)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}
