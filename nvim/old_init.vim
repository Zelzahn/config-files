" Plugins
call plug#begin('~/.local/share/nvim/plugged')

" Better status bar at the bottom
Plug 'vim-airline/vim-airline'
" Autocloses brackets
Plug 'rstacruz/vim-closer'
" Downloads the colorscheme
Plug 'srcery-colors/srcery-vim'
" Atom colorscheme
Plug 'rakr/vim-one'
" NERDTree is a ls in nvim :O
Plug 'scrooloose/nerdtree', { 'on': ['NERDTreeToggle', 'NERDTreeFind'] }

call plug#end()

" Changes the NERDTree toggle and the find
let NERDTreeHijackNetrw = 0
noremap <silent> <leader>n :NERDTreeToggle<CR> <C-w>=
noremap <silent> <leader>f :NERDTreeFind<CR> <C-w>=

" Start NERDTree on nvim startup
" autocmd StdinReadPre * let s:std_in=1
" autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif

" Autorefreshes NERDTree, useful for when a file outside vim is created
function! NERDTreeRefresh()
    if &filetype == "nerdtree"
        silent exe substitute(mapcheck("R"), "<CR>", "", "")
    endif
endfunction

autocmd BufEnter * call NERDTreeRefresh()

" Changes the leader to something usable on AZERTY
let mapleader = "<"

" Displays line numbers
set number

" Disables the (annoying) bell
set noerrorbells
set visualbell
set t_vb=

" Makes it possible to use the mouse for changing the cursor
set mouse=a

" Syntax highlighting using the srcery colorscheme and 256 colors
syntax on
set t_Co=256
colorscheme srcery
" set background=dark

" Copy pasting
map <C-a> <ESC>ggVG
vmap <C-c> "+yi
vmap <C-x> "+c
vmap <C-v> c<ESC>"+p
imap <C-v> <ESC>"+pa

set laststatus=2
set ruler
set number
set scrolloff=4
set showmatch
set wildmenu
set colorcolumn=80
set relativenumber
