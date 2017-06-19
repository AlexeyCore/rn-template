from packages.modules import structure, helpers
from packages.modules.state import g_state


def install_rn(project_name=''):
    return helpers.run_command(['react-native init %s' % project_name])


def init():
    print('Initialization react-native...')
    init_complete = install_rn(g_state.get('name'))
    print(init_complete)


# Run template scripts
init()
