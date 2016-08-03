# pylint: disable=E1102
"""Start on jinja templating"""
import sys
from os import path, getcwd, pardir
sys.path.append('/Users/ohenrik/Sites/laminate/laminate')
import laminate as lm # pylint: disable=E0401

laminator = lm.Laminate(title='First report!')

input_dir = path.join(sys.path[0],'Turboencabulator')
output_dir = path.join(sys.path[0],'build')
templates_dir = [path.join(sys.path[0], pardir, 'dist')]

laminator.create_html(input_dir=input_dir, build_dir=output_dir,
                      custom_template=templates_dir)
