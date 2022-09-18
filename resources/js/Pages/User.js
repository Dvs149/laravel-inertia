import React from 'react'

const User = ({users,create_url}) => {
  return (
    <div>
      {users.map(user =>
                    <p key={user.id}>
                        {user.name}
                    </p>
                )
      }
    </div>
  )
}

export default User