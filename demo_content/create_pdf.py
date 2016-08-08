# pylint: disable=E1102
"""Start on jinja templating"""
import sys
from os import path, pardir
sys.path.append('/Users/ohenrik/Sites/laminate/laminate')
import laminate as lm # pylint: disable=E0401

input_file = path.join(sys.path[0], 'Turboencabulator', 'index.md')
output_dir = path.join(sys.path[0], 'build')
templates_dir = [path.join(sys.path[0], pardir, 'laminate_default', 'templates')]

laminator = lm.Laminate(input_file=input_file, build_dir=output_dir, title='First report!')

laminator.create_html()
