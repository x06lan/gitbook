tags `math` `matrix` `algebra`

# matrix algebra

# multiplication

$$
AB=
\begin{bmatrix}
1&0\\
2&3\\
\end{bmatrix}

\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}
$$

### dot product

$$
AB=
\begin{bmatrix}
1&0\\
2&3\\
\end{bmatrix}

\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}=
\begin{bmatrix}
1a+0c & 1b+0d\\
2a+3c & 2b+3d\\
\end{bmatrix}
$$

### by columns

$$
AB=
\begin{bmatrix}
1&0\\
2&3\\
\end{bmatrix}

\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}=
\begin{bmatrix}
a\begin{bmatrix} 1\\2\end{bmatrix}+c\begin{bmatrix} 0\\3\end{bmatrix}&,& b\begin{bmatrix} 1\\2\end{bmatrix}+d\begin{bmatrix} 0\\3\end{bmatrix}\\
\end{bmatrix}
$$

### by row

$$
AB=
\begin{bmatrix}
1&0\\
2&3\\
\end{bmatrix}

\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}=
 \begin{bmatrix}
1\begin{bmatrix} a & b\end{bmatrix}+0\begin{bmatrix} c&d \end{bmatrix}\\
2\begin{bmatrix} a & b\end{bmatrix}+3\begin{bmatrix} c&d\end{bmatrix}\\
\end{bmatrix}
$$

### by block

$$
AB=
\begin{bmatrix}
1&0\\
2&3\\
\end{bmatrix}

\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}=
\begin{bmatrix}
1\\2
\end{bmatrix}
\begin{bmatrix}
a&b
\end{bmatrix}
+
\begin{bmatrix}
0\\3
\end{bmatrix}
\begin{bmatrix}
c&d
\end{bmatrix}
$$

# matrix form of gaussian elimination

actually the row reduce from the [there](./linear-algebra.html#reduced-echelon-formgaussian-elimination) are matrix multiplication as well

Subtracting 2 times the $1^{st}$ row of A from the $2^{nd}$ row of A

$$
\{ EA \} \rightarrow A^+\\
\begin{bmatrix}
1 & 0 & 0\\
-2 & 1 & 0\\
0 & 0 & 1\\
\end{bmatrix}
\begin{bmatrix}
x_{11} &x_{12} & x_{13}\\
x_{21} &x_{22} & x_{23}\\
x_{31} &x_{32} & x_{33}\\
\end{bmatrix} =
\begin{bmatrix}
x_{11} &x_{12} & x_{13}\\
x_{21}-2x_{11} &x_{22}-2x_{21} & x_{23}-2x_{13}\\
x_{31} &x_{32} & x_{33}\\
\end{bmatrix}\\
$$

## for example

$$
\begin{aligned}\\
\{ EA \} &\rightarrow A^+\\
\begin{bmatrix}
1 & 0 & 0\\
-2 & 1 & 0\\
0 & 0 & 1\\
\end{bmatrix}
\begin{bmatrix}
2 & 1 & 1\\
4 & -6 & 0\\
-2 & 7 & 2\\
\end{bmatrix}&\rightarrow
\begin{bmatrix}
2 & 1 & 1\\
0 & -8 & -2\\
-2 & 7 & 2\\
\end{bmatrix}\\
\end{aligned}\\
$$

## revert U to A

$G,F,E $ are elimination operation matrix

$$
\begin{aligned}\\
E^{-1} F^{-1} G^{-1}&=L\\

\begin{bmatrix}
1 & 0 & 0\\
l*{21} & 1 & 0\\
0 & 0 & 1\\
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
l*{31} & 0 & 1\\
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & l*{32} & 1\\
\end{bmatrix}
&=
\begin{bmatrix}
1 & 0 & 0\\
l*{21} & 1 & 0\\
l*{31} & l*{32} & 1\\
\end{bmatrix}\\
\begin{bmatrix}
1 & 0 & 0\\
l*{21} & 1 & 0\\
l*{31} & l\_{32} & 1\\
\end{bmatrix}
&=L
\end{aligned}


$$

$$

U = \begin{bmatrix}
d*1 & & \\
& d_2 & \\
& & \ddots & \\
& & & d_n
\end{bmatrix}

\begin{bmatrix}
1 & \frac{u*{12}}{d*1} & \frac{u*{13}}{d*1} \\
& 1 & \frac{u*{23}}{d_2} \\
& & \ddots & \\
& & & 1
\end{bmatrix}\\
U= D U^*\\


$$

$L$ is Lower triangular matrix

$U$ is Upper triangular matrix

$$

GFEA=U\\
E^{-1}F^{-1}G^{-1}U=A\\
\text{let } L=E^{-1}F^{-1}G^{-1}\\
LU=A\\
LDU^*=A\\


$$

$$

\begin{align}
Ax &= b \\
L^{-1}Ax &= L^{-1}b \\
Ux &= L^{-1}b \\
x &= U^{-1}L^{-1}b
\end{align}


$$

### Symmetric matrix

$$
A=A^T\\
A=LDU^{*}=LDL^{-1}
$$

## projection matrix(project vector to columns space)

### projection vector on vector

$$
\text{project } \overrightharpoon {b} \text{ on } \overrightharpoon {a} \text{ as } \hat{a}\\
\overrightharpoon{(b-\hat{a})} \perp \overrightharpoon{ a } \rightarrow a^T (b-\hat{a}) =0\\
\hat{a}=x \times \overrightharpoon{a}\\
\begin{aligned}
a^T (b-\hat{a})& =0\\
a^T b - a^T \hat{a}& =0\\
a^T (\hat{a})& =a^T b\\
a^T (x \times a)& =a^T b\\
x\times (a^T a) & =a^T b\\
x & =\frac{a^T b}{a^T a}\\
\end{aligned}\\


\begin{aligned}
\hat{a}&=x \times \overrightharpoon{a}\\
& =\frac{a^T b}{a^T a} \times \overrightharpoon{a}\\
& =\underbrace{(\frac{a a^T}{a^T a})}_{P}\overrightharpoon{b}\\

\end{aligned}
$$

### projection matrix
$$
\hat{a}=Pa\\
a-Pa=(I-P)a\\
$$
### property
* symmetric 
$$
P=P^T\\
P^n=P
$$

## Pseudoinverse matrix


$$
\begin{aligned}
&A^+(Ax)=x_r\\
&A^{+}=A^T(AA^T)^{-1}\\
&AA^+=I\\
\end{aligned}
$$

## determinant

$$
\begin{aligned}

det(ab)&=det(a)det(b)\\
det(a^T)&=\frac{1}{det(a)}\\
\end{aligned}
$$

## SVD


$$
A=U\Sigma V^T\\
det(A^TA -\lambda I)=0\\
(A^TA-\lambda I) V=0\\
\Sigma =\text{diagonal}( \sqrt{\lambda}) \text{sort by big to small}\\
V=\text{unit-length}(V)\\
V^TV=I\\
U=AV\Sigma ^{-1}\\
u_i=\frac{1}{\sqrt{\lambda_i}}Av_i\\
$$

## polar decomposition

$$
\begin{aligned}
    
A&=QS\\
A&=U\Sigma V^T\\
&=(UV^T)(V\Sigma V^T)\\
&=QS\\
\end{aligned}

$$

<!-- ## Hermitian matrix
共軛
$$

$$ -->


