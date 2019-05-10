const User = use('App/Models/User')
const Role = use('Role')

class UserSeeder {
  async run () {

    // ==========================================================================================================================================
    // Create roles
    // ==========================================================================================================================================
    const roleAdmin = await Role.findOrCreate({
      name: 'Administrator'
    },
    {
      name: 'Administrator',
      slug: 'administrator',
      description: 'manage administration privileges'
    }
    )

    // ==========================================================================================================================================
    // Create users
    // ===========================================================================================================================================

    let user = await User.findOrCreate({
      username: "admin"
    }, {
      username: "admin",
      email: "admin@test.com",
      password: "secret"
    }
    )
    await user.roles().attach([roleAdmin.id])
  }
}

module.exports = UserSeeder