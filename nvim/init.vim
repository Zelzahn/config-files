" ------- "
" Plugins "
" ------- "
call plug#begin('~/.local/share/nvim/plugged')

" Better status bar at the bottom
Plug 'vim-airline/vim-airline'
" Autocloses brackets
Plug 'rstacruz/vim-closer'
" Downloads the colorscheme
Plug 'srcery-colors/srcery-vim'

call plug#end()

" ------- "
" General "
" ------- "

"let mapleader=" "
set nocompatible
syntax on
set t_Co=256
colorscheme srcery
set encoding=utf-8
set number
set pastetoggle=<F2>
set mouse=a
set colorcolumn=80
set ruler
set number
set scrolloff=999
set laststatus=2
set wildmenu

" disables the bell
set noerrorbells
set visualbell
set t_vb=

" Keybinds
map <C-a> <ESC>ggVG
vmap <C-c> "+yi
vmap <C-x> "+c
vmap <C-v> c<ESC>"+p
imap <C-v> <ESC>"+pa

" spellcheck
map <F6> :setlocal spell! spelllang=nl,en<CR>
inoremap <F6> <Esc>:setlocal spell! spelllang=nl,en<CR>a
inoremap ,p <Esc>[sz=a
inoremap ,n <Esc>]sz=a

" guide navigation
inoremap <Space><Tab> <Esc>/<++><Enter>"_c4l
vnoremap <Space><Tab> <Esc>/<++><Enter>"_c4l
map <Space><Tab> <Esc>/<++><Enter>"_c4l

" templates
" map la :read<space>~/.vim/startup_files/config.tex<Enter>:1<Enter>dd:w<Enter>:edit<Enter>:23<Enter>f}i
" map cpp :read<space>~/.vim/startup_files/config.cpp<Enter>:1<Enter>dd:w<Enter>:$<Enter>i

" ------ "
" Python "
" ------ "

au FileType python setlocal autoindent

" ---- "
" Bash "
" ---- "

au FileType sh setlocal autoindent

" ----- "
" Latex "
" ----- "

au FileType tex map <F5> :w<Enter>:!xelatex<space><c-r>%<Enter>
au FileType tex inoremap <F5> <Esc>:w<Enter>:!xelatex<space><c-r>%<Enter>a
au FileType tex inoremap ,eq \begin{equation}<Enter><Enter>\end{equation}<Enter><Enter><++><Esc>3ki
au FileType tex inoremap ,eqm \begin{equation}<Enter>\begin{aligned}<Enter><Enter>\end{aligned}<Enter>\end{equation}<Enter><Enter><++><Esc>4ki
au FileType tex inoremap ,se \section{<++>}<Enter><Enter><++><Esc>2k0/s<Enter>i
au FileType tex inoremap ,fr \frac{}{<++>}<++><Esc>0f}i


"---"
"c++"
"---"

au FileType cpp setlocal autoindent
au FileType cpp setlocal cindent
au FileType cpp setlocal expandtab
au FileType cpp setlocal tabstop=4
au FileType cpp setlocal shiftwidth=4
au FileType cpp map <F5> :w<Enter>:!g++<space>-std=c++11<space>-Wall<space>-O3<space>-o<space>%:r<space>%<Enter>
au FileType cpp inoremap <F5> <Esc>:w<Enter>:!g++<space>-std=c++11<space>-Wall<space>-O3<space>-o<space>%:r<space>%<Enter>a
au FileType cpp map <F4> :!./%:r<Enter>
au FileType cpp inoremap <F4> <Esc>:!./%:r<Enter>a
au FileType cpp inoremap ,cl (<++>)<Enter>{<Enter><++><Enter>}<Enter><++><Esc>4k0f(i
au FileType cpp inoremap ,for for<space>()<Enter>{<Enter><++><Enter>}<Enter><++><Esc>4k0f)i
