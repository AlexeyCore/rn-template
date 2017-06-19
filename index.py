from packages.modules import structure, helpers
from packages.modules.state import g_state


# Initialization react-native TODO: ask user about dependencies
print('Initialization react-native...')
init_complete = helpers.run_command(['react-native init %s' % g_state.get('name')])
print(init_complete)

# Restructuring react-native project
structure.restructuring()

# Complete
print('\033[92mComplete!\033[0m')
